import React from 'react';
import type { TextProps } from 'react-native';
import { I18nManager, StyleSheet, Text as RNText } from 'react-native';
import { twMerge } from 'tailwind-merge';

import type { TxKeyPath } from '@/lib/i18n';
import { translate } from '@/lib/i18n';

interface Props extends TextProps {
  className?: string;
  tx?: TxKeyPath;
}

export const Text = ({
  className = '',
  style,
  tx,
  children,
  ...props
}: Props) => {
  const mergedClass = React.useMemo(
    () =>
      twMerge(
        'text-base text-black dark:text-white font-inter font-normal',
        className
      ),
    [className]
  );

  const mergedStyle = React.useMemo(
    () =>
      StyleSheet.flatten([
        {
          writingDirection: I18nManager.isRTL
            ? ('rtl' as const)
            : ('ltr' as const),
        },
        style,
      ]),
    [style]
  );

  return (
    <RNText className={mergedClass} style={mergedStyle} {...props}>
      {tx ? translate(tx) : children}
    </RNText>
  );
};
