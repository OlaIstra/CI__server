import React from 'react';

import { Header } from '@core/components/Header/Header';
import { Button } from '@atoms/Button/Button';
import { Modal } from '@core/components/Modal/Modal';
import './HistoryPage.scss';

export const HistoryPage = () => (
	<>
		<Header title='philip1967/my-awesome-repo'>
			<div className='btn__block'>
				<Button icon='icon-play'>Run build</Button>
				<Button icon='icon-settings' />
			</div>
		</Header>
		<div className='historyPage'>
			<div className='repo'>
				<div className='repo__info'>
					<div className='repo__flex'>
						<div className='repo__id'>
							<span className='icon-tick' />
							#1333
						</div>
						<div className='repo__title'>
							add documentation for postgres scaler
						</div>
					</div>
					<div className='repo__flex'>
						<div className='repo__branch'>
							<span className='icon-code-commit' />
							master
							<span className='repo__commit'>9c9f0b9</span>
						</div>
						<div className='repo__fio'>
							<span className='icon-user' />
							Vadim Makeev
						</div>
					</div>
				</div>
				<div className='repo__data'>
					<div className='repo__data__date'>
						<span className='icon-calendar' />
						21 янв, 03:06
					</div>
					<div className='repo__data__time'>
						<span className='icon-timer' />1 ч 20 мин
					</div>
				</div>
			</div>
			<Button>Show more</Button>
			<br />
			temporary solution to show modal
			<br />
			<Modal />
		</div>
	</>
);
