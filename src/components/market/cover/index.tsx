import { ImageBackground, View } from "react-native";
import { IconArrowLeft } from "@tabler/icons-react-native";
import { s } from "./styles";
import { Button } from "@/components/button";
import { router } from "expo-router";

type CoverProps = {
  uri: string;
};
export default function Cover({ uri }: CoverProps) {
  return (
    <ImageBackground source={{ uri }} style={s.container}>
      <View style={s.header}>
        <Button
          style={{ height: 40, width: 40 }}
          onPress={() => {
            router.back();
          }}
        >
          <Button.Icon icon={IconArrowLeft} />
        </Button>
      </View>
    </ImageBackground>
  );
}
