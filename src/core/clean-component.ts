import React from 'react';
import { CleanViewProps } from './clean-view';

/**
 * Create a clean container for the application
 * @param repository - The repository to be used
 * @param entity - The entity to be used
 * @param useCase - The use case to be used
 * @returns The clean container
 */
export function cleanComponent<R,U>({
    repositoryInstance,
    useCase, 
    component
}: {
    repositoryInstance: R
    useCase: new (repository: R) => U
    component: React.ComponentType<CleanViewProps>,
}) {
    const useCaseInstance = new useCase(repositoryInstance);
    
    return React.createElement(component, { useCase: useCaseInstance });
}