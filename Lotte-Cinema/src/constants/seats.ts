export const SEAT_INFO: string[] = (() => {
  const rows = ['B', 'C', 'D', 'E', 'F', 'G'] as const;
  const seatsPerRow: Record<(typeof rows)[number], number> = {
    B: 11,
    C: 13,
    D: 13,
    E: 12,
    F: 13,
    G: 13,
  };

  const seatInfo: string[] = [];
  rows.forEach((row) => {
    for (let i = 1; i <= seatsPerRow[row]; i++) {
      seatInfo.push(`${row}${i}`);
    }
  });

  return seatInfo;
})();

export const SEAT_ROWS = ['B', 'C', 'D', 'E', 'F', 'G'];
