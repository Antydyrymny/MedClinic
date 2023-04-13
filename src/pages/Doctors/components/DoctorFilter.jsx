import { useContext } from 'react';
import { DocSearchContext } from 'src/context/DocSearchContext';
import SpecFilter from './SpecFilter';
import DropDown from 'src/components/DropDown/DropDown';
import CheckboxList from 'src/components/CheckboxList/CheckboxList';
import Checkbox from 'src/components/Checkbox/Checkbox';
import { specialties } from 'src/data/Specialties';
import { clinics } from 'src/data/Clinics';
import DoctorFilterCss from './DoctorFilter.module.css';

function DoctorFilter({ specSearchState }) {
    const [searchParams, setSearchParams] = useContext(DocSearchContext);

    return (
        <div className={DoctorFilterCss.filter}>
            <form>
                <fieldset>
                    <Checkbox
                        label={'Admission to VMS'}
                        onChange={(checked) =>
                            setSearchParams({ ...searchParams, worksWithVhi: checked })
                        }
                        checked={searchParams.worksWithVhi}
                    />
                    <Checkbox
                        label={'Works with kids'}
                        onChange={(checked) =>
                            setSearchParams({ ...searchParams, worksWithKids: checked })
                        }
                        checked={searchParams.worksWithKids}
                    />
                    <DropDown label={'Clinic'}>
                        <CheckboxList
                            points={clinics}
                            checkedArray={searchParams.clinic.map((c) => c.id)}
                            onChange={handleChange('clinic', clinics)}
                        />
                    </DropDown>
                    <DropDown label={'Specialization'}>
                        <SpecFilter
                            specSearchState={specSearchState}
                            points={specialties}
                            checkedArray={searchParams.speciality.map((s) => s.id)}
                            onChange={handleChange('speciality', specialties)}
                        />
                    </DropDown>
                </fieldset>
            </form>
        </div>
    );

    function handleChange(paramName, data) {
        return function (checked, paramChanged) {
            const param = checked
                ? [...searchParams[paramName], data.find((p) => p.name === paramChanged)]
                : searchParams[paramName].filter((p) => p.name !== paramChanged);
            setSearchParams({ ...searchParams, [paramName]: param });
        };
    }
}

export default DoctorFilter;
