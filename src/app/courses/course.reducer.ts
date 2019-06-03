import { Course } from './model/course';
import { EntityState, createEntityAdapter, EntityAdapter } from '@ngrx/entity';

export interface CoursesState extends EntityState<Course> {

}

export const adapter: EntityAdapter<Course> = createEntityAdapter<Course>();
