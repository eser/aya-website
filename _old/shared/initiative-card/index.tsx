import Image from "next/image";
import {
  Badge,
  Button,
  Card,
  createStyles,
  Flex,
  Group,
  Text,
} from "@mantine/core";
import { Conditional } from "@webclient/shared/react/conditional";

interface InitiativeCardProps {
  tags: string[];
  imageUri?: string;
  imageAltText: string;
  title: string;
  description: string;
  link: string;
}

const useStyles = createStyles((theme) => ({
  logo: {
    height: "8rem",
  },

  logoAlt: {
    display: "flex",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    background: theme.colorScheme === "dark"
      ? theme.colors.dark[7]
      : theme.colors.gray[0],
  },

  button: {
    "& i": {
      fontSize: "1rem",
    },
  },
}));

const InitiativeCard = (props: InitiativeCardProps) => {
  const { classes } = useStyles();

  return (
    <a href={props.link}>
      <Card shadow="xs" p="md" radius="sm" withBorder>
        <Card.Section
          className={classes.logo}
          component={Flex}
          justify="center"
          align="center"
        >
          <Conditional
            if={props.imageUri !== undefined}
            then={
              <Image
                src={props.imageUri!}
                alt={props.imageAltText}
                width={376}
                height={160}
              />
            }
            otherwise={
              <Text className={classes.logoAlt}>
                {props.imageAltText}
              </Text>
            }
          />
        </Card.Section>

        <Group position="apart" mt="md" mb="xs">
          <Text color="gray.8" weight={600}>
            {props.title}
          </Text>
          <Badge>
            {props.tags.join(", ")}
          </Badge>
        </Group>

        <Text size="sm" color="dimmed">
          {props.description}
        </Text>

        <Button
          className={classes.button}
          component="a"
          variant="outline"
          color="blue"
          fullWidth
          mt="md"
          radius="md"
          leftIcon={<i className="bx bx-link-external" />}
        >
          Ziyaret et
        </Button>
      </Card>
    </a>
  );
};

export { InitiativeCard, InitiativeCard as default };
