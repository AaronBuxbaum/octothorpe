import React from 'react';
import List from 'grommet/components/List';
import Row from './Row';

const SelectedHashtags = ({
    items,
    removeItem,
}) => (
        <List>
            {items.map((item, index) =>
                <Row
                    item={item}
                    removeItem={() => removeItem(index)}
                    key={item.title}
                />
            )}
        </List>
    );

export default SelectedHashtags;
