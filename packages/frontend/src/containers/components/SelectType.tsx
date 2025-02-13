import { List, ListItem, ListDivider, Select, Typography, Option, Chip, optionClasses, listItemDecoratorClasses, ListItemDecorator } from "@mui/joy";
import Check from '@mui/icons-material/Check';
import React from "react";
import SignDatabase from "../../signs";

export interface SelectTypeProps {
    value: string;
    setValue: (value: string) => void;
}

export default function SelectType({ value, setValue }: SelectTypeProps) {
    return (
        <Select
        placeholder="Veldu einn"
        value={value}
        onChange={(_, newValue) => setValue(newValue)}
        slotProps={{
          listbox: {
            component: 'div',
            sx: {
              maxHeight: 240,
              overflow: 'auto',
              '--List-padding': '0px',
              '--ListItem-radius': '0px',
            },
          },
        }}
        sx={{ width: 240 }}
      >
        {SignDatabase.map((category, index) => {
            return (
          <React.Fragment key={category.name}>
            {index !== 0 && <ListDivider role="none" />}
            <List
              aria-labelledby={`select-group-${name}`}
              sx={{ '--ListItemDecorator-size': '28px' }}
            >
              <ListItem id={`select-group-${name}`} sticky>
                <Typography level="body-xs" sx={{ textTransform: 'uppercase' }}>
                {category.id}. {category.name} ({category.signs.length})
                </Typography>
              </ListItem>
              {category.signs.map((sign) => (
                <Option
                  key={sign.id}
                  value={sign.id}
                  label={
                    <React.Fragment>
                      <Chip
                        size="sm"
                        color={category.descriptionColor}
                        sx={{ borderRadius: 'xs', mr: 1 }}
                      >
                        {category.name}
                      </Chip>{' '}
                      {sign.id}
                    </React.Fragment>
                  }
                  sx={{
                    [`&.${optionClasses.selected} .${listItemDecoratorClasses.root}`]:
                      {
                        opacity: 1,
                      },
                  }}
                >
                  <ListItemDecorator sx={{ opacity: 0 }}>
                    <Check />
                  </ListItemDecorator>
                {sign.id} {sign.name}
                </Option>
              ))}
            </List>
          </React.Fragment>
        )})}
      </Select>
    )
}
