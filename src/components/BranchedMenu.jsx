import { isValidElement, useLayoutEffect, useRef, useState } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import './BranchedMenu.css';

const PAD = 6;
const MARK = 16;

const renderIcon = (icon) => (
  isValidElement(icon) ? icon : <HugeiconsIcon icon={icon} size={16} strokeWidth={1.8} />
);

const toSet = (open) => new Set(Array.isArray(open) ? open : open >= 0 ? [open] : []);

export default function BranchedMenu({
  items = [],
  defaultOpen = 0,
  defaultActive = '',
  onSelect,
  onToggle,
  color = '#f5f5f5',
  accentColor = '#7BC144',
  lineColor = '#3f3f46',
  width = 300,
  rowHeight = 42,
  indent = 48,
  trunk = 14,
  radius = 10,
  lineWidth = 1.5,
  fontSize = 14,
  drawDuration = 400,
  foldDuration = 300,
  className = '',
}) {
  const [open, setOpen] = useState(() => toSet(defaultOpen));
  const [active, setActive] = useState(() => {
    if (defaultActive) return defaultActive;
    const first = items.find((item, index) => item.children && toSet(defaultOpen).has(index));
    return first?.children?.[0]?.value ?? '';
  });
  const navRef = useRef(null);
  const heads = useRef([]);
  const markerRef = useRef(null);

  const activeSection = items.findIndex((item) => item.children?.some((child) => child.value === active));
  const markerShown = activeSection >= 0 && open.has(activeSection);

  useLayoutEffect(() => {
    const place = (glide) => {
      const marker = markerRef.current;
      const heading = heads.current[activeSection];
      if (!marker) return;
      const isVisible = markerShown && heading;
      if (!glide) marker.style.transition = 'none';
      if (isVisible) marker.style.top = `${heading.offsetTop + (heading.offsetHeight - MARK) / 2}px`;
      marker.toggleAttribute('data-on', Boolean(isVisible));
      if (!glide) {
        void marker.offsetHeight;
        marker.style.transition = '';
      }
    };

    place(true);
    let first = true;
    const observer = new ResizeObserver(() => {
      if (first) {
        first = false;
        return;
      }
      place(false);
    });
    if (navRef.current) observer.observe(navRef.current);
    return () => observer.disconnect();
  }, [activeSection, markerShown, items, fontSize, rowHeight]);

  const select = (value, item) => {
    setActive(value);
    onSelect?.(value, item);
  };

  const toggle = (index) => {
    setOpen((previous) => {
      const next = new Set(previous);
      const isOpen = !next.has(index);
      if (isOpen) next.add(index);
      else next.delete(index);
      onToggle?.(index, isOpen);
      return next;
    });
  };

  const curve = Math.min(radius, rowHeight / 2 - 2);
  const endX = indent - 8;
  const rowY = (index) => PAD + index * rowHeight + rowHeight / 2;
  const branch = (index) => `M ${trunk} ${rowY(index) - curve} A ${curve} ${curve} 0 0 0 ${trunk + curve} ${rowY(index)} H ${endX}`;
  const reach = (index) => `M ${trunk} 0 V ${rowY(index) - curve} A ${curve} ${curve} 0 0 0 ${trunk + curve} ${rowY(index)} H ${endX}`;
  const length = (index) => rowY(index) - curve + (Math.PI * curve) / 2 + (endX - trunk - curve);

  return (
    <nav
      ref={navRef}
      className={`branched-menu${className ? ` ${className}` : ''}`}
      style={{
        '--bm-w': `${width}px`,
        '--bm-ink': color,
        '--bm-accent': accentColor,
        '--bm-line': lineColor,
        '--bm-font': `${fontSize}px`,
        '--bm-row': `${rowHeight}px`,
        '--bm-indent': `${indent}px`,
        '--bm-line-w': lineWidth,
        '--bm-draw': `${drawDuration}ms`,
        '--bm-fold': `${foldDuration}ms`,
      }}
    >
      <span ref={markerRef} className="branched-menu__marker" aria-hidden="true" />
      {items.map((item, index) => {
        const children = item.children;
        const isOpen = children ? open.has(index) : false;
        const leafValue = item.value ?? item.label;
        const leafActive = !children && leafValue === active;
        const bodyHeight = children ? PAD * 2 + children.length * rowHeight : 0;

        return (
          <div key={item.value ?? item.label} className="branched-menu__section" data-open={isOpen ? '' : undefined}>
            <button
              ref={(element) => { heads.current[index] = element; }}
              type="button"
              className="branched-menu__head"
              aria-expanded={children ? isOpen : undefined}
              aria-current={leafActive ? 'true' : undefined}
              data-active={leafActive ? '' : undefined}
              onClick={() => (children ? toggle(index) : select(leafValue, item))}
            >
              {item.label}
            </button>
            {children ? (
              <div className="branched-menu__body">
                <div className="branched-menu__fold">
                  <div className="branched-menu__tree" style={{ height: bodyHeight }}>
                    <svg className="branched-menu__lines" width={indent} height={bodyHeight} aria-hidden="true">
                      <path className="branched-menu__base" d={`M ${trunk} 0 V ${rowY(children.length - 1) - curve}`} />
                      {children.map((child, childIndex) => <path key={child.value} className="branched-menu__base" d={branch(childIndex)} />)}
                      {children.map((child, childIndex) => (
                        <path
                          key={child.value}
                          className="branched-menu__reach"
                          d={reach(childIndex)}
                          style={{
                            strokeDasharray: length(childIndex),
                            strokeDashoffset: child.value === active ? 0 : length(childIndex),
                          }}
                        />
                      ))}
                    </svg>
                    {children.map((child) => (
                      <button
                        key={child.value}
                        type="button"
                        className="branched-menu__item"
                        aria-current={child.value === active ? 'true' : undefined}
                        data-active={child.value === active ? '' : undefined}
                        tabIndex={isOpen ? 0 : -1}
                        onClick={() => select(child.value, child)}
                      >
                        {child.icon ? <span className="branched-menu__icon" aria-hidden="true">{renderIcon(child.icon)}</span> : null}
                        <span className="branched-menu__label">{child.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        );
      })}
    </nav>
  );
}
