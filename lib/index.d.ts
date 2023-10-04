import React from 'react';

interface ButtonDsProps {
    children?: React.ReactNode;
    type?: 'primary' | 'default' | 'text';
    size?: 'middle' | 'large';
    disabled?: boolean;
    onClick?: () => void;
}
declare const ButtonDs: ({ children, type, size, disabled, onClick }: ButtonDsProps) => React.JSX.Element;

declare const crmTheme: {
    fonts: {
        WebH1: string;
        WebH2: string;
        WebH3: string;
        WebH4: string;
        WebBody1: string;
        WebBody2: string;
        WebCaption: string;
    };
    colors: {
        BrandPrimary50: string;
        BrandPrimary40: string;
        BrandPrimary60: string;
        Error: string;
        Success: string;
        Warning: string;
        Gray1: string;
        Gray2: string;
        Gray3: string;
        Gray4: string;
        Gray5: string;
        Gray6: string;
        BgSurface1: string;
        BgSurface2: string;
        BgSurface3: string;
        BgSuccess: string;
        BgError: string;
        BgWarning: string;
        BgInfo: string;
        TextIconIgray1: string;
        TextIconGray2: string;
        TextIconInverse: string;
        TextIconBrand: string;
        TextIconError: string;
        TextIconWarning: string;
        TextIconSuccess: string;
        TextIconInfo: string;
        CtaTextBrandEnable: string;
        CtaTextBrandHover: string;
        CtaTextBrandPress: string;
        CtaTextIconDisable: string;
        CtaBorderBrandEnable: string;
        CtaBorderBrandHover: string;
        CtaBorderBrandPress: string;
        CtaBorderBrandFocus: string;
        CtaBorderDisable: string;
        CtaBgBrandEnable: string;
        CtaBgBrandHover: string;
        CtaBgBrandPress: string;
        CtaBgDisable: string;
        BorderSuccess: string;
        BorderError: string;
        BorderWarning: string;
        BorderInfo: string;
        BorderGray: string;
        BorderBrand: string;
    };
    spacing: {
        borderRadius: {
            default: string;
        };
    };
};
interface CustomThemeProviderProps {
    theme?: typeof crmTheme;
    children: React.ReactNode;
}
declare const CustomThemeProvider: ({ theme, children }: CustomThemeProviderProps) => React.JSX.Element;

export { ButtonDs, CustomThemeProvider };
