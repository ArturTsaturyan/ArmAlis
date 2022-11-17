import BadgeUnstyled, { badgeUnstyledClasses } from '@mui/base/BadgeUnstyled';
import { styled } from '@mui/system';

export const StyledBadge = styled(BadgeUnstyled)`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  list-style: none;
  font-family: IBM Plex Sans, sans-serif;
  position: relative;
  display: inline-block;
  line-height: 1;

  & .${badgeUnstyledClasses.badge} {
    z-index: auto;
    min-width: 20px;
    height: 20px;
    padding: 0 6px;
    color: #fff;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    white-space: nowrap;
    text-align: center;
    background: #f68d10;
    border-radius: 10px;
    box-shadow: 0 0 0 1px #fff;
    position: absolute;
    top: 0;
    left: 10px;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
    opacity: 1;
    transition: opacity 0.2s ease-in-out;
  }

  & .${badgeUnstyledClasses.invisible} {
    opacity: 0;
    pointer-events: none;
  }
`;
