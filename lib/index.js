export default (text) => {
  const lines = text.split('\n');

  lines.forEach((line, i) => {
    if (line.match(/^\s*,/)) {

      for (let j = i - 1; j >= 0; j--) {
        let earlierLine = lines[j];

        if (earlierLine.trim().length) {
          lines[j] = `${lines[j]},`;
          lines[i] = lines[i].replace(/,/, '');

          break;
        }
      }
    }
  });

  return lines.join('\n');
};
