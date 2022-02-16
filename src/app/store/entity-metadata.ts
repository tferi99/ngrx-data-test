import {EntityDataModuleConfig, EntityMetadataMap} from '@ngrx/data';
import {userEntityMetadata} from '../user/store/user.metadata';

const entityMetadata: EntityMetadataMap = {
  User: userEntityMetadata
};

const pluralNames = {
  User: "User"
};

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
  pluralNames
};
