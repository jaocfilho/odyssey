'use client';

import { z } from 'zod';

import { Form } from '@/modules/forms/components';
import { TextInput } from '@/modules/forms/components/Inputs';
import { useCustomForm } from '@/modules/forms/hooks/use-custom-form';
import { useSupabase } from '@/lib/supabase/Provider';
import { Button } from '@/components/Button';

const waitlistSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
});

type WaitlistFormValues = z.infer<typeof waitlistSchema>;

export function WaitlistForm() {
  const { supabase } = useSupabase();

  const { methods } = useCustomForm({
    schema: waitlistSchema,
  });

  const onSubmit = async (data: WaitlistFormValues) => {
    await supabase.from('waitlist').insert(data);
  };

  const isLoading = methods.formState.isSubmitting;
  const isSubmitted = methods.formState.isSubmitSuccessful;

  const button = isSubmitted ? 'Thank you!' : 'Notify me';

  return (
    <Form.Root id="registerForm" onSubmit={onSubmit} {...methods}>
      <div className="flex flex-col max-w-md gap-4 sm:flex-row">
        <TextInput placeholder="Enter your email" name="email" type="email" />
        <Button
          colorScheme="indigo"
          type="submit"
          loading={isLoading}
          disabled={isSubmitted}
        >
          {button}
        </Button>
      </div>
    </Form.Root>
  );
}
