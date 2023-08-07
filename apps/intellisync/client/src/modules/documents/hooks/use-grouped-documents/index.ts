import { useArrayState } from '@odyssey/react-hooks';
import { groupArrayBy } from '@odyssey/arrays';
import { Document } from '../../entities';

function groupDocuments(documents: Document[]) {
  const groupedDocuments = groupArrayBy(
    documents,
    (d) => d.metadata.essential.fileName
  );

  return Object.entries(groupedDocuments).map(([fileName, documents]) => ({
    characters: documents.reduce(
      (acc, document) => acc + document.metadata.essential.characters,
      0
    ),
    fileName,
  }));
}

export function useGroupedDocuments() {
  const [documents, controller] = useArrayState<Document>();

  const resetDocuments = controller.clear;

  const setDocuments = controller.set;

  const removeDocuments = (fileName: string) => {
    controller.filter(
      (document) => document.metadata.essential.fileName !== fileName
    );
  };

  const groupedDocuments = groupDocuments(documents);

  return {
    documents,
    groupedDocuments,
    removeDocuments,
    resetDocuments,
    setDocuments,
  };
}
