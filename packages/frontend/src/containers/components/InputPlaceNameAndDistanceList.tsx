import { Button, Divider, Input, Stack } from "@mui/joy";
import React from "react";

export interface SelectTypeProps {
    value: { placeName: string; distance: number }[];
    setValue: (value: { placeName: string; distance: number }[]) => void;
}

export default function InputPlaceNameAndDistanceList({ value, setValue }: SelectTypeProps) {
    return (
        <>
        <Stack gap={1}>
        {
          value.map((place, index) => (
            <Input 
              key={index}
              value={place.placeName} 
              onChange={(e) => {
                const newValue = [...value];
                newValue[index] = { ...newValue[index], placeName: e.target.value };
                setValue(newValue);
              }}
              sx={{ paddingRight: 0 }}
              endDecorator={
                <React.Fragment>
                  <Divider orientation="vertical" />
                  <Input 
                    value={place.distance} 
                    type="number"
                    onChange={(e) => {
                      const newValue = [...value];
                      newValue[index] = { ...newValue[index], distance: Number(e.target.value) };
                      setValue(newValue);
                    }}
                    variant={"plain"}
                    sx={{ float: "right", width: 85 }}
                  />
                </React.Fragment>
              }
            />
          ))
        }
        <Button onClick={() => setValue([...value, { placeName: '', distance: 0 }])}>Bæta við</Button>
        </Stack>
        </>
    )
}
