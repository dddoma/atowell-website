/** Center the selected chip inside its own horizontal rail, never the page. */
export function scrollRailToItem(
  rail: HTMLDivElement | null,
  item: HTMLButtonElement | null | undefined,
  behavior: ScrollBehavior = 'auto',
) {
  if (!rail || !item) return;

  const railBounds = rail.getBoundingClientRect();
  const itemBounds = item.getBoundingClientRect();
  const center = rail.scrollLeft + itemBounds.left - railBounds.left - rail.clientLeft + itemBounds.width / 2;
  const maxLeft = Math.max(0, rail.scrollWidth - rail.clientWidth);
  const left = Math.min(maxLeft, Math.max(0, center - rail.clientWidth / 2));

  // scrollIntoView also scrolls ancestor containers, including the viewport.
  // The BMI shortcut rail can be below the fold when the height changes.
  rail.scrollTo({ left, top: rail.scrollTop, behavior });
}
