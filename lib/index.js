const fixLine = (line, i, lines) => {
  if (line.match(/^\s*,/)) {
    let isWithinCommentBlock;

    for (let j = i - 1; j >= 0; j--) {
      const currentLine = lines[j].trim();

      if (!isWithinCommentBlock) {
        isWithinCommentBlock = currentLine.match(/\*\/$/);
      }

      const isInlineComment = currentLine.match(/^\/\//);
      const isComment = isInlineComment || isWithinCommentBlock;
      const isValidTargetLine = currentLine.length && !isComment;

      if (isValidTargetLine) {
        lines[j] = `${lines[j]},`;
        lines[i] = lines[i].replace(/,/, '');

        break;
      }

      if (isWithinCommentBlock && currentLine.match(/^\/\*/)) {
        isWithinCommentBlock = false;
      }
    }
  }
};

export default text => {
  const lines = text.split('\n');
  lines.forEach(fixLine);

  return lines.join('\n');
};
