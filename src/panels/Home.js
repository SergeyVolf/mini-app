import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Header from '@vkontakte/vkui/dist/components/Header/Header';
import View from '@vkontakte/vkui/dist/components/View/View';
import Div from '@vkontakte/vkui/dist/components/Div/Div';

function Home() {
	return(
		<View activePanel="button">
	<Panel id="button">
		<Group header={<Header mode="secondary">Типы кнопок</Header>}>
     <Div>
       <Button mode="secondary">КНОПКА РАЗ НАХУЙ</Button>
     </Div>
     <Div>
       <Button mode="tertiary">КНОПКА ДВА НАХУЙ</Button>
     </Div>
     <Div>
       <Button mode="outline">КНОПКА ТРИ НАХУЙ</Button>
     </Div>
     <Div>
       <Button mode="commerce">КНОПКА ЧЕТЫРЕ НАХУЙ</Button>
     </Div>
		</Group>
	</Panel>
	</View>
);
}

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
