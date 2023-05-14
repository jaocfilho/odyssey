import { useGpt35RefinementForm } from '@/modules/refinement/components/Gpt35RefinementForm';
import { useCreateAppForm } from '../../CreateAppForm';

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
  const {
    methods: createAppFormMethods,
    customMethods: { submitForm: submitCreateAppForm },
  } = useCreateAppForm({ handleSuccess: console.log });

  const {
    methods: gpt35RefinementFormMethods,
    customMethods: { submitForm: submitGpt35RefinementForm },
  } = useGpt35RefinementForm({ onSubmit: console.log });

  const { submitForms, resetForms } = useBaseDrawerForms({
    resetCreateAppForm: createAppFormMethods.reset,
    resetGpt35RefinementForm: gpt35RefinementFormMethods.reset,
    submitCreateAppForm: submitCreateAppForm,
    submitGpt35RefinementForm: submitGpt35RefinementForm,
  });

  return {
    gpt35RefinementFormMethods,
    createAppFormMethods,
    submitForms,
    resetForms,
  };
}
