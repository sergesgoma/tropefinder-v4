import React from 'react';
import useTropes from '../../../../hooks/useTropes';
import removeDuplicates from '../../../../utils/removeDuplicates';
import IBookPageProps from '../../../../types/IBookPageProps';
import '../../styles/Corner.css';

const Corner = ({ book, title }: IBookPageProps) => {  
  const filteredTropes = useTropes();

  return (
    <div className="corner">
      <h4>Tags</h4>
      <div className="corner-tag">
        {book.map((value, index: number) => {
          const uniqueTag = removeDuplicates(value.tag);
          const filteredTag = uniqueTag.filter((item: any) => filteredTropes.includes(item));
          const tags = [...filteredTag].sort();
          return (
            <div className="corner-tag-link" key={index}>
              {tags.map((tag: string, index: number) => {
                return (
                  <a href={'/tags/' + tag} key={index}>
                    {tag}
                  </a>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Corner;