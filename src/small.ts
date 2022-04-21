export default (m: (0 | 1)[][] | (0 | 1)[][][]) => {
  const calcPer = (x) =>
    x.reduce(
      (t, r, i) =>
        t +
        r.reduce(
          (nt, c, j) =>
            c === 0
              ? nt +
                (x[i - 1]?.[j] || 0) +
                (x[i + 1]?.[j] || 0) +
                (r[j - 1] || 0) +
                (r[j + 1] || 0)
              : nt,
          0
        ),
      0
    );
  return Array.isArray(m[0][0])
    ? m
        .map((a) => calcPer(a))
        .reduce((t, n) => t + n, 0)
    : calcPer(m);
};
