export default (m: (0 | 1)[][]) =>
  m.reduce(
    (t, r, i) =>
      t +
      r.reduce(
        (nt, c, j) =>
          c === 0
            ? nt +
              (m[i - 1]?.[j] || 0) +
              (m[i + 1]?.[j] || 0) +
              (r[j - 1] || 0) +
              (r[j + 1] || 0)
            : nt,
        0
      ),
    0
  );
