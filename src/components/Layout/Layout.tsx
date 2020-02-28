import * as React from "react";
import { Sidebar } from "../Sidebar/Sidebar";
import styles from './Layout.module.css';

const Layout: React.FC = props => {
    return (
        <div className={styles.Layout}>
            {props.children}
        </div>
    );
};

export default Layout;
