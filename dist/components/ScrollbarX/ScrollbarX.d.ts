import * as React from 'react';
interface Props {
    children: React.ReactNode;
    w?: number;
    h?: number;
    r?: number;
    thumbColor?: string;
    trackColor?: string;
    wraperStyle?: object;
    thumbStyle?: object;
    trackStyle?: object;
}
declare const ScrollbarX: React.FC<Props>;
export default ScrollbarX;
