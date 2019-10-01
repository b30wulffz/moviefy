import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/HeaderComponent.module.css';

function Header() {
	return (
		<header>
			<div className={styles.Header}>
				<div className={styles.Header__Banner}>MovieFy</div>
				<div className={styles.Header__Links}>
					<ul>
						<li>
							<NavLink to='/home' className={styles.NavLink}>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink to='/add_movie' className={styles.NavLink}>
								Add movie
							</NavLink>
						</li>
						<li>
							<NavLink to='/login' className={styles.NavLink}>
								Login
							</NavLink>
						</li>
						<li>
							<NavLink to='/signup' className={styles.NavLink}>
								Sign Up
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</header>
	);
}

export default Header;
