import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import {FormattedMessage, defineMessages} from 'react-intl';
import {connect} from 'react-redux';
import check from './check.svg';
import dropdownCaret from './dropdown-caret.svg';
import {MenuItem, Submenu} from '../menu/menu.jsx';
import {ACCENT_BLUE, ACCENT_MAP, ACCENT_PURPLE, ACCENT_RED, ACCENT_TURBO, ACCENT_REDUX, ACCENT_RAINBOW, Theme} from '../../lib/themes/index.js';
import {openAccentMenu, accentMenuOpen, closeSettingsMenu} from '../../reducers/menus.js';
import {setTheme} from '../../reducers/theme.js';
import {persistTheme} from '../../lib/themes/themePersistance.js';
import rainbowIcon from './tw-accent-rainbow.svg';
import styles from './settings-menu.css';

const options = defineMessages({
    [ACCENT_RED]: {
        defaultMessage: 'Acid',
        description: 'Name of the red color scheme, used by TurboWarp by default.',
        id: 'tw.accent.red'
    },
    [ACCENT_PURPLE]: {
        defaultMessage: 'Amethyst',
        description: 'Name of the purple color scheme. Matches modern Scratch.',
        id: 'tw.accent.purple'
    },
    [ACCENT_BLUE]: {
        defaultMessage: 'Aqua',
        description: 'Name of the blue color scheme. Matches Scratch before the high contrast update.',
        id: 'tw.accent.blue'
    },
    [ACCENT_TURBO]: {
        defaultMessage: 'Turbo',
        description: 'Name of the Turbo color scheme',
        id: 'tw.accent.turbo'
    },
    [ACCENT_REDUX]: {
        defaultMessage: 'Redux',
        description: 'lazy cant write',
        id: 'tw.accent.redux'
    },
    [ACCENT_RAINBOW]: {
        defaultMessage: 'Rainbow',
        description: 'Name of color scheme that uses a rainbow.',
        id: 'tw.accent.rainbow'
    }
});

const icons = {
    [ACCENT_RAINBOW]: rainbowIcon
};

const ColorIcon = props => icons[props.id] ? (
    <img
        className={styles.accentIconOuter}
        src={icons[props.id]}
        draggable={false}
        // Image is decorative
        alt=""
    />
) : (
    <div
        className={styles.accentIconOuter}
        style={{
            // menu-bar-background is var(...), don't want to evaluate with the current values
            backgroundColor: ACCENT_MAP[props.id].guiColors['looks-secondary'],
            backgroundImage: ACCENT_MAP[props.id].guiColors['menu-bar-background-image'],
        }}
    />
);
ColorIcon.propTypes = {
    id: PropTypes.string
};
const AccentMenuItem = props => (
    <MenuItem onClick={props.onClick}>
        <div className={styles.option}>
            <img
                className={classNames(styles.check, {[styles.selected]: props.isSelected})}
                width={15}
                height={12}
                src={check}
                draggable={false}
            />
            <ColorIcon id={props.id} />
            <FormattedMessage {...options[props.id]} />
        </div>
    </MenuItem>
);