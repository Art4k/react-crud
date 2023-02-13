import { linksGroups } from './navbar-data';

// eslint-disable-next-line import/prefer-default-export
export const getActiveLinkGroupTitle = (currentUrl: string) => {
  for (let i = 0; i < linksGroups.length; i += 1) {
    const linksGroup = linksGroups[i];
    const hasActiveLink = linksGroup.linksData
      .map<string>(({ link }) => link)
      .includes(currentUrl);

    if (hasActiveLink) return linksGroup.title;
  }

  return null;
};
