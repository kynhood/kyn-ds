import { User } from "@solar-icons/react";
import "./avatar.css";
type AvatarSize = 'small' | 'medium' | 'large' | 'extra-large';
export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: AvatarSize;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}
export function Avatar({
  size = 'medium',
  className = '',
  onClick,
  ...props
}: AvatarProps) {
  const sizeClass = `avatar-${size}`;
  const avatarClasses = `avatar ${sizeClass} ${className}`.trim();
  return (
    <div 
      className={avatarClasses} 
      data-testid="avatar-component"
      role="img"
      aria-label="User avatar"
      onClick={onClick}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? ((e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick(e as any);
        }
      }) : undefined}
      {...props}
    >
      <User className="avatar-image" aria-hidden="true" />
    </div>
  );
}
export default Avatar;