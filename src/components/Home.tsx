import React, {FC} from 'react';

import EventExample from './EventExample';
import Card, {CardVariant} from './Card';


const Home: FC = () => {
    return (
        <div>
            <EventExample/>
            <Card onClick={() => console.log('click')} variant={CardVariant.outlined} width='200px' height='200px'>
                <button>Button</button>
            </Card>
        </div>
    );
};

export default Home;