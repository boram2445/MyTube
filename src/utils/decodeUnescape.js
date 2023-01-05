const regex = /&(amp|lt|gt|quot|#39);/g;
const chars = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#39;": "'",
};

export default function decodeUnescape(str) {
  if (regex.test(str)) {
    return str.replace(regex, (matched) => chars[matched] || matched);
  } else return str;
}
