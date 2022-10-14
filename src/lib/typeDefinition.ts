import React from 'react';

type ButtonDisabled = Boolean;

type Html = string

export declare interface QwikCopyProps {
  children?: React.ReactNode;
  styles?: React.CSSProperties;
  isDisabled: ButtonDisabled;
  htmlContent: Html
}

