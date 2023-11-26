'use client';

import {
    Alignment,
    Button,
    Navbar,
    Spinner,
    Tab,
    TabId,
    Tabs,
} from '@blueprintjs/core';
import { useState } from 'react';

type HeaderState = {
    activePanelOnly: boolean;
    animate: boolean;
    fill: boolean;
    large: boolean;
    navbarTabId: TabId;
    showIcon: boolean;
    showTags: boolean;
    useRoundTags: boolean;
    vertical: boolean;
};

export const Header = () => {
    const [state, setState] = useState<HeaderState>({
        activePanelOnly: false,
        animate: true,
        fill: true,
        large: false,
        navbarTabId: 'Home',
        showIcon: false,
        showTags: false,
        useRoundTags: false,
        vertical: false,
    });

    const handleNavbarTabChange = (navbarTabId: TabId) =>
        setState({ ...state, navbarTabId });

    return (
        <Navbar>
            <Navbar.Group>
                <Navbar.Heading>
                    Page: <strong>Home</strong>
                </Navbar.Heading>
            </Navbar.Group>
            <Navbar.Group align={Alignment.RIGHT}>
                <Tabs
                    animate={state.animate}
                    fill={state.fill}
                    id="navbar"
                    large={state.large}
                    onChange={handleNavbarTabChange}
                    selectedTabId={state.navbarTabId}
                >
                    <Tab
                        id="Home"
                        title="Home"
                        icon={state.showIcon ? 'home' : undefined}
                    />
                    <Tab
                        id="Files"
                        title="Files"
                        icon={state.showIcon ? 'folder-open' : undefined}
                    />
                    <Tab
                        id="Builds"
                        title="Builds"
                        icon={state.showIcon ? 'build' : undefined}
                        tagContent={state.showTags ? 4 : undefined}
                        tagProps={{ round: state.useRoundTags }}
                    />
                </Tabs>
            </Navbar.Group>
            <Navbar.Group align={Alignment.LEFT}>
                <Navbar.Heading>Blueprint</Navbar.Heading>
                <Navbar.Divider />
                <Button className="bp5-minimal" icon="home" text="Home" />
                <Button className="bp5-minimal" icon="document" text="Files" />
            </Navbar.Group>
        </Navbar>
    );
};
