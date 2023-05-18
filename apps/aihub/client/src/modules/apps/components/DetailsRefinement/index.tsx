// mostra lista com os diferentes fields de refinement de um app
// recebe o objeto da página, que faz a call server side

import { Gpt35RefinementRow } from '@/lib/supabase/types';

type DetailsRefinementProps = {
  appRefinement: Gpt35RefinementRow;
};

export function DetailsRefinement({ appRefinement }: DetailsRefinementProps) {
  return <div>{appRefinement.app}</div>;
}
