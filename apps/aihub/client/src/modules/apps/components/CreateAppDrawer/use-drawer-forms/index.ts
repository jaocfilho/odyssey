import { useGpt35RefinementForm } from '@/modules/refinement/components/Gpt35RefinementForm';
import { useCreateAppForm } from '../../CreateAppForm';
import { useHandleMutation } from '../use-handle-mutation';

type UseBaseDrawerFormsProps = {
  submitCreateAppForm: () => void;
  resetCreateAppForm: () => void;
  submitGpt35RefinementForm: () => void;
  resetGpt35RefinementForm: () => void;
};

export function useBaseDrawerForms({
  resetCreateAppForm,
  resetGpt35RefinementForm,
  submitCreateAppForm,
  submitGpt35RefinementForm,
}: UseBaseDrawerFormsProps) {
  const submitForms = () => {
    submitCreateAppForm();
    submitGpt35RefinementForm();
  };

  const resetForms = () => {
    resetCreateAppForm();
    resetGpt35RefinementForm();
  };

  return { submitForms, resetForms };
}

export function useDrawerForms() {
  const { addRefinementToParams, addAppToParams, handleMutation } =
    useHandleMutation();

  const {
    methods: createAppFormMethods,
    customMethods: { submitForm: submitCreateAppForm },
  } = useCreateAppForm({ onSubmit: addAppToParams });

  const {
    methods: gpt35RefinementFormMethods,
    customMethods: { submitForm: submitGpt35RefinementForm },
  } = useGpt35RefinementForm({ onSubmit: addRefinementToParams });

  const { submitForms, resetForms } = useBaseDrawerForms({
    resetCreateAppForm: createAppFormMethods.reset,
    resetGpt35RefinementForm: gpt35RefinementFormMethods.reset,
    submitCreateAppForm: submitCreateAppForm,
    submitGpt35RefinementForm: submitGpt35RefinementForm,
  });

  const canMutate =
    createAppFormMethods.formState.isSubmitSuccessful &&
    gpt35RefinementFormMethods.formState.isSubmitSuccessful;

  if (canMutate) {
    handleMutation();
  }

  return {
    gpt35RefinementFormMethods,
    createAppFormMethods,
    submitForms,
    resetForms,
  };
}
