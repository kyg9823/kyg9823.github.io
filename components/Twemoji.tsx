import { TwemojiProps } from "../types/components";
import { kebabCase } from "../utils/string";

const Twemoji = ({ emoji, size = 'twa-lg', className }: TwemojiProps) => {
  let cls = `inline-block swa ${size} twa-${kebabCase(emoji)} ${className || ''}`
  return <i className={cls.trim()} />;
}

export default Twemoji;