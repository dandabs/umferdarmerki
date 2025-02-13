import { Select, Option, optionClasses, listItemDecoratorClasses, ListItemDecorator } from "@mui/joy";
import Check from '@mui/icons-material/Check';
import municipalities from "../../municipalities";

export interface SelectTypeProps {
    value: string;
    setValue: (value: string) => void;
}

export default function SelectMunicipality({ value, setValue }: SelectTypeProps) {
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
        {municipalities.map((municipality) => (
                <Option
                  key={municipality.lau}
                  value={municipality.lau}
                  label={municipality.officialName}
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
                {municipality.officialName}
                </Option>
              ))}
      </Select>
    )
}
