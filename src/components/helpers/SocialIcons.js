import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Flex, Text, Box } from 'theme-ui';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import GoNationGuy from '../Icons/GoNationGuy';

const SocialIcons = () => {
  const iconFillColor = '#fff';
  const iconSize = '24px';
  const data = useStaticQuery(graphql`
    query FooterQuery {
      businessData {
        name
        slug
        links {
          facebook
          instagram
          twitter
          website
          youtube
        }
      }
    }
  `);

  const socialLinks = Object.keys(data.businessData.links);
  const links = data.businessData.links;

  const getIcon = name => {
    switch (name) {
      case 'facebook':
        return (
          <FaFacebookF size={iconSize} color={iconFillColor}></FaFacebookF>
        );
      case 'instagram':
        return (
          <FaInstagram size={iconSize} color={iconFillColor}></FaInstagram>
        );
      case 'twitter':
        return <FaTwitter size={iconSize} color={iconFillColor}></FaTwitter>;
      case 'website':
        return (
          <GoNationGuy
            height={iconSize}
            width={iconSize}
            color={iconFillColor}></GoNationGuy>
        );
    }
  };

  const renderSocialLinks = () => {
    return socialLinks
      .filter(
        socialName => socialName === 'website' || links[socialName].length
      )
      .map(socialName => (
        <Box sx={{ ml: 3 }}>
          <Text
            as='a'
            href={
              socialName === 'website'
                ? `https://gonation.com/place/${data.businessData.slug}/pulse`
                : links[socialName]
            }
            target='_blank'
            rel='noopener noreferrer'>
            {getIcon(socialName)}
          </Text>
        </Box>
      ));
  };

  return <Flex>{renderSocialLinks()}</Flex>;
};

export default SocialIcons;
