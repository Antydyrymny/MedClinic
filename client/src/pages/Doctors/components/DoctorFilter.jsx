import { useContext } from 'react';
import { DocSearchContext } from 'src/context/DocSearchContext';
import SpecFilter from './SpecFilter';
import Accordion from 'src/components/Accordion/Accordion';
import CheckboxList from 'src/components/CheckboxList/CheckboxList';
import Checkbox from 'src/components/Checkbox/Checkbox';
import DoctorFilterCss from './DoctorFilter.module.css';

function DoctorFilter({ specSearchState, specialties, clinics, border = true }) {
    const [searchParams, setSearchParams] = useContext(DocSearchContext);

    return (
        <form
            className={`${DoctorFilterCss.wrapper} ${
                border ? DoctorFilterCss.border : null
            }`}
        >
            <div className={DoctorFilterCss.bar} name={'VHICoverage'}>
                <Checkbox
                    label={'VHI coverage'}
                    onChange={(checked) =>
                        setSearchParams({
                            ...searchParams,
                            clinic: [...searchParams.clinic],
                            speciality: [...searchParams.speciality],
                            worksWithVhi: checked,
                        })
                    }
                    checked={searchParams.worksWithVhi}
                    square={true}
                    highlight={false}
                    customLabel={{
                        color: '#545a66',
                        fontSize: '1.25rem',
                        fontWeight: '400',
                    }}
                />
            </div>
            <div className={DoctorFilterCss.bar} name={'WorksWithKids'}>
                <Checkbox
                    label={'Works with kids'}
                    onChange={(checked) =>
                        setSearchParams({
                            ...searchParams,
                            clinic: [...searchParams.clinic],
                            speciality: [...searchParams.speciality],
                            worksWithKids: checked,
                        })
                    }
                    checked={searchParams.worksWithKids}
                    square={true}
                    highlight={false}
                    customLabel={{
                        color: '#545a66',
                        fontSize: '1.25rem',
                        fontWeight: '400',
                    }}
                />
            </div>
            <div className={DoctorFilterCss.bar} name={'Clinics'}>
                <Accordion label={'Clinic'}>
                    <CheckboxList
                        points={clinics}
                        checkedArray={searchParams.clinic.map((c) => c.id)}
                        onChange={handleSearchParamChange(
                            'clinic',
                            clinics,
                            searchParams
                        )}
                        square={true}
                        highlight={false}
                        customLabel={{
                            color: '#545a66',
                        }}
                    />
                </Accordion>
            </div>
            <div className={DoctorFilterCss.bar} name={'Specializations'}>
                <Accordion label={'Specialization'} openByDefault={true}>
                    <SpecFilter
                        specSearchState={specSearchState}
                        specialties={specialties}
                        checkedArray={searchParams.speciality.map((s) => s.id)}
                        onChange={handleSearchParamChange(
                            'speciality',
                            specialties,
                            searchParams
                        )}
                    />
                </Accordion>
            </div>
        </form>
    );

    function handleSearchParamChange(paramName, data, searchParams) {
        return (checked, item) => {
            const param = checked
                ? [...searchParams[paramName], data.find((p) => p.name === item)]
                : searchParams[paramName].filter((p) => p.name !== item);
            // Handle other array properties
            const otherObjParams = Object.entries(searchParams)
                .filter(([key, value]) => Array.isArray(value) && key !== paramName)
                .map((p) => p[0]);
            const newObj = { ...searchParams, [paramName]: param };
            otherObjParams.forEach((p) => (newObj[p] = [...searchParams[p]]));
            setSearchParams(newObj);
        };
    }
}

export default DoctorFilter;
