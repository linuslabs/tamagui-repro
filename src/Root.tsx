import "@tamagui/core/reset.css";

import { Button, TamaguiProvider, YStack } from "tamagui";
import { Accordion, Paragraph, Square } from "tamagui";

import config from "./tamagui.config";

export const Root = () => {
  return (
    <TamaguiProvider config={config} defaultTheme="light">
      <YStack f={1} ai="center" jc="center">
        <Accordion overflow="hidden" width="$20" type="multiple">
          <Accordion.Item value="a1">
            <Accordion.Trigger asChild>
              <Button>Hello world</Button>
            </Accordion.Trigger>
            <Accordion.HeightAnimator animation="unset">
              <Accordion.Content animation="unset" exitStyle={{ opacity: 0 }}>
                <Paragraph>
                  Cold showers can help reduce inflammation, relieve pain,
                  improve circulation, lower stress levels, and reduce muscle
                  soreness and fatigue.
                </Paragraph>
              </Accordion.Content>
            </Accordion.HeightAnimator>
          </Accordion.Item>
        </Accordion>
      </YStack>
    </TamaguiProvider>
  );
};
