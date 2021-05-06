import React from 'react';

class Header extends React.Component {
	render() {
		return (
			<header className={'top'}>
				<div className={'wrap'}>
					<div className={'header-content'}>
						<div className={'header-rating'}>
							<div className={'header-rating_tag'}>Рейтинг: </div>
							<div className={'header-rating_icon'}>★★★★★</div>
						</div>

						<div className={'header-divider'}></div>
						<div className={'font-effect-fire-animation'}>{this.props.title}</div>

						<h3>
							<span>Быстрая доставка горячих</span>
							<span className={'sub-header'}>#бургеров</span>
						</h3>
					</div>
				</div>
			</header>
		)
	}
}

export default Header;