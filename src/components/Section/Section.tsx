import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { SingleSection } from '../SingleSection/SingleSection';
import './Section.css';
import useIsMobile from '../../hooks/useisMobile';

type SectionsProps = {
  title: string;
  id: number;
  img: string;
  index: number;
  slug: string;
  bigImage: any[];
};

const Section: React.FC<SectionsProps> = ({ title, index, slug, img, bigImage }) => {
  const isMobile = useIsMobile();
  const bigOrSmall = bigImage.includes(index);
  return (
    <div
      className="items_section"
      style={{
        width: isMobile >= 1200 ? (bigOrSmall ? '48%' : '24%') : '45%',
        height: isMobile >= 1200 ? (bigOrSmall ? '494px' : '100%') : '300',
        right: bigOrSmall ? '0' : 'unset',
        bottom: bigOrSmall ? '0' : 'unset',
        marginTop:
          isMobile >= 1200
            ? bigOrSmall &&
              index !== 0 &&
              index !== 6 &&
              index !== 12 &&
              index !== 18 &&
              index !== 24
              ? '-107px'
              : '0'
            : '0',
      }}
    >
      <Link to={`/category/${slug}`}>
        <SingleSection title={title} index={index} img={img} bigOrSmall={bigOrSmall} />
      </Link>
    </div>
  );
};
export default memo(Section);
