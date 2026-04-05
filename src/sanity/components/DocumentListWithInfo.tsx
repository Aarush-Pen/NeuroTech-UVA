import { useEffect, useState } from 'react';
import { useClient } from 'sanity';
import { useRouter } from 'sanity/router';
import { usePaneRouter } from 'sanity/structure';
import { Card, Text, Box, Stack, Flex, Spinner, Button } from '@sanity/ui';
import { AddIcon } from '@sanity/icons';

interface Options {
  description: string;
  schemaType: string;
  query: string;
}

interface DocItem {
  _id: string;
  title: string;
  subtitle?: string;
}

export default function DocumentListWithInfo({
  options,
}: {
  options: Options;
}) {
  const client = useClient({ apiVersion: '2024-01-01' });
  const { ChildLink } = usePaneRouter();
  const router = useRouter();
  const [docs, setDocs] = useState<DocItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDocs = () =>
      client.fetch<DocItem[]>(options.query).then((result) => {
        setDocs(result);
        setLoading(false);
      });

    fetchDocs();

    const subscription = client
      .listen(`*[_type == "${options.schemaType}"]`)
      .subscribe(() => fetchDocs());

    return () => subscription.unsubscribe();
  }, [client, options.query, options.schemaType]);

  if (loading) {
    return (
      <Flex align="center" justify="center" padding={5}>
        <Spinner muted />
      </Flex>
    );
  }

  return (
    <Box padding={4}>
      <Stack space={4}>
        <Flex align="center" justify="space-between">
          <Text size={1} muted>
            {options.description}
          </Text>
          <Button
            icon={AddIcon}
            text="Create"
            tone="primary"
            mode="ghost"
            fontSize={1}
            padding={2}
            onClick={() =>
              router.navigateIntent('create', {
                type: options.schemaType,
              })
            }
          />
        </Flex>
        <Stack space={2}>
          {docs.length === 0 ? (
            <Text size={1} muted>
              No documents yet.
            </Text>
          ) : (
            docs.map((doc) => (
              <ChildLink key={doc._id} childId={doc._id}>
                <Card padding={3} radius={2} border>
                  <Text size={1} weight="medium">
                    {doc.title || 'Untitled'}
                  </Text>
                  {doc.subtitle && (
                    <Box marginTop={1}>
                      <Text size={0} muted>
                        {doc.subtitle}
                      </Text>
                    </Box>
                  )}
                </Card>
              </ChildLink>
            ))
          )}
        </Stack>
      </Stack>
    </Box>
  );
}
