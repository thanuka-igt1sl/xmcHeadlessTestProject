import React from 'react';
import {
  Field,
  ImageField,
  LinkField,
  NextImage as ContentSdkImage,
  Link as ContentSdkLink,
  RichText as ContentSdkRichText,
} from '@sitecore-content-sdk/nextjs';
import { ComponentProps } from 'lib/component-props';

interface Fields {
  Title: Field<string>;
  Subtitle: Field<string>;
  BackgroundImage: ImageField;
  PrimaryLink: LinkField;
}

type HeroProps = ComponentProps & {
  fields: Fields;
};

const Hero = (props: HeroProps): JSX.Element => {
  const { fields, params } = props;
  const { styles, RenderingIdentifier: id } = params;

  const Wrapper = ({ children }: { children: JSX.Element | JSX.Element[] }): JSX.Element => (
    <div className={`component hero ${styles}`} id={id}>
      <div className="component-content">{children}</div>
    </div>
  );

  if (!fields) {
    return (
      <Wrapper>
        <span className="is-empty-hint">Hero</span>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <>
        {fields.BackgroundImage && (
          <div className="hero-background">
            <ContentSdkImage field={fields.BackgroundImage} />
          </div>
        )}
        <div className="hero-content">
          {fields.Title && (
            <h1 className="hero-title">
              <ContentSdkRichText field={fields.Title} />
            </h1>
          )}
          {fields.Subtitle && (
            <p className="hero-subtitle">
              <ContentSdkRichText field={fields.Subtitle} />
            </p>
          )}
          {fields.PrimaryLink && (
            <ContentSdkLink field={fields.PrimaryLink} className="hero-cta">
              {fields.PrimaryLink.value?.text || 'Learn More'}
            </ContentSdkLink>
          )}
        </div>
      </>
    </Wrapper>
  );
};

export default Hero;
