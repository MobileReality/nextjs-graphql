import 'styled-components';

import { theme } from 'theme/Theme';

export type ThemeProjectType = typeof theme;

declare module 'styled-components' {
    /* eslint-disable @typescript-eslint/consistent-type-definitions */
    export interface DefaultTheme extends ThemeProjectType {}
}
