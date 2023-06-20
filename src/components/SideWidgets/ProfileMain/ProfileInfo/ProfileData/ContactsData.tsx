import React from 'react';
import css from './ContactsData.module.scss';
import facebook from '../../../../../assets/images/svg/facebook.svg';
import instagram from '../../../../../assets/images/svg/instagram.svg';
import website from '../../../../../assets/images/svg/website.svg';
import twitter from '../../../../../assets/images/svg/twitter.svg';
import youtube from '../../../../../assets/images/svg/youtube.svg';
import github from '../../../../../assets/images/svg/github.svg';
import vk from '../../../../../assets/images/svg/vk.svg';
import mainLink from '../../../../../assets/images/svg/mainLink.svg';

type ContactType = {
  contactTitle: string;
  contactValue: string;
};
export const Contact: React.FC<ContactType> = ({ contactTitle, contactValue }) => {
  const icon: any = {
    vk: vk,
    facebook: facebook,
    youtube: youtube,
    twitter: twitter,
    mainLink: mainLink,
    github: github,
    website: website,
    instagram: instagram
  };

  const link = icon[contactTitle];
  if (!contactValue) {
    return null;
  }
  return (
    <li className={css.contactItem}>
      <a target="_blank" href={contactValue}>
        <img title={contactTitle} src={link} alt={contactTitle} />
      </a>{' '}
    </li>
  );
};
