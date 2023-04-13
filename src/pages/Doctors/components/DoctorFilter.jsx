import { useContext } from 'react';
import { DocSearchContext } from 'src/context/DocSearchContext';
import SearchBar from 'src/components/SearchBar/SearchBar';
import DropDown from 'src/components/DropDown/DropDown';
import CheckboxList from 'src/components/CheckboxList/CheckboxList';
import { specialties } from 'src/data/Specialties';
import { clinics } from 'src/data/Clinics';
import DoctorFilterCss from './DoctorFilter.module.css';

function DoctorFilter() {
    const [searchParams, setSearchParams] = useContext(DocSearchContext);

    return (
        <div className={DoctorFilterCss.filter}>
            <form>
                <fieldset>
                    <div>
                        <label>
                            Admission to VMS
                            <input
                                type='checkbox'
                                onChange={(e) =>
                                    setSearchParams({
                                        ...searchParams,
                                        worksWithVhi: e.target.checked,
                                    })
                                }
                            />
                        </label>
                    </div>
                    <div>
                        <label htmlFor=''>
                            Works with kids
                            <input
                                type='checkbox'
                                onChange={(e) =>
                                    setSearchParams({
                                        ...searchParams,
                                        worksWithKids: e.target.checked,
                                    })
                                }
                            />
                        </label>
                    </div>
                    <DropDown label={'Clinic'}>
                        <CheckboxList
                            points={clinics.map((clinic) => ({
                                ...clinic,
                                name: clinic.address,
                            }))}
                            onChange={handleClinicChange}
                        />
                    </DropDown>
                    <DropDown label={'Specialization'}>
                        {/* <SearchBar onChange={()=>} placeholder={'Search by specialization'} /> */}
                        <CheckboxList points={specialties} onChange={handleSpecChange} />
                    </DropDown>
                </fieldset>
            </form>
        </div>
    );

    function handleClinicChange() {
        setSearchParams({
            ...searchParams,
        });
    }

    function handleSpecChange(checked, specName) {
        const speciality = checked
            ? [
                  ...searchParams.speciality,
                  specialties.find((spec) => spec.name === specName),
              ]
            : searchParams.speciality.filter((spec) => spec.name !== specName);
        setSearchParams({
            ...searchParams,
            speciality,
        });
    }
}

export default DoctorFilter;
