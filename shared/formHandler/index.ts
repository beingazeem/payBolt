import { Control as FormControl, Controller } from 'react-hook-form';
import { useHandleForm } from '@shared/formHandler/useHandleForm';
import { AnyType } from '@shared/formHandler/types';

type Control = FormControl<AnyType>;

export { Controller, useHandleForm, type AnyType, type Control };
