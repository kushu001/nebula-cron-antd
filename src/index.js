import { Button, Tabs } from 'antd';
import React, { useCallback, useEffect, useState } from 'react';
import { dayRegex, hourRegex, minuteRegex, monthRegex, secondRegex, weekRegex, yearRegex } from './cron-regex';
import DayPane from './DayPane';
import HourPane from './HourPane';
import MinutePane from './MinutePane';
import MonthPane from './MonthPane';
import SecondPane from './SecondPane';
import WeekPane from './WeekPane';
import YearPane from './YearPane';

const tabPaneStyle = { paddingLeft: 10, paddingBottom: 8, marginTop: -10 };
const getTabTitle = (text) => <div style={{ width: 50, textAlign: 'center' }}>{text}</div>;

const allTabItems = [
    { key: '1', label: '秒', type: 'second' },
    { key: '2', label: '分', type: 'minute' },
    { key: '3', label: '时', type: 'hour' },
    { key: '4', label: '日', type: 'day' },
    { key: '5', label: '月', type: 'month' },
    { key: '6', label: '周', type: 'week' },
    { key: '7', label: '年', type: 'year' }
];

function NebulaCron(props) {
    const { style, footerStyle, footerRenderer, value, onOk, tabs = allTabItems } = props;
    const [currentTab, setCurrentTab] = useState(() => tabs[0]?.key || '1');
    const [second, setSecond] = useState('*');
    const [minute, setMinute] = useState('*');
    const [hour, setHour] = useState('*');
    const [day, setDay] = useState('*');
    const [month, setMonth] = useState('*');
    const [week, setWeek] = useState('?');
    const [year, setYear] = useState('*');

    const getCronValue = () => {
        const tabTypes = tabs.map(tab => tab.type);
        const values = [];
        
        if (tabTypes.includes('second')) {
            values.push(second);
        } else {
            values.push('*');
        }
        
        if (tabTypes.includes('minute')) {
            values.push(minute);
        } else {
            values.push('*');
        }
        
        if (tabTypes.includes('hour')) {
            values.push(hour);
        } else {
            values.push('*');
        }
        
        if (tabTypes.includes('day')) {
            values.push(day);
        } else {
            values.push('*');
        }
        
        if (tabTypes.includes('month')) {
            values.push(month);
        } else {
            values.push('*');
        }
        
        if (tabTypes.includes('week')) {
            values.push(week);
        } else {
            values.push('?');
        }
        
        if (tabTypes.includes('year')) {
            values.push(year);
        } else {
            values.push('*');
        }
        
        return values.join(' ');
    };

    const onParse = () => {
        if (value) {
            try {
                let [secondVal, minuteValue, hourVal, dayVal, monthVal, weekVal, yearVal] = value.split(' ');
                secondVal = secondRegex.test(secondVal) ? secondVal : '*';
                minuteValue = minuteRegex.test(minuteValue) ? minuteValue : '*';
                hourVal = hourRegex.test(hourVal) ? hourVal : '*';
                dayVal = dayRegex.test(dayVal) ? dayVal : '*';
                monthVal = monthRegex.test(monthVal) ? monthVal : '*';
                weekVal = weekRegex.test(weekVal) ? weekVal : '?';
                weekVal = dayVal !== '?' ? '?' : weekVal;
                yearVal = yearRegex.test(yearVal) ? yearVal : '*';
                setSecond(secondVal);
                setMinute(minuteValue);
                setHour(hourVal);
                setDay(dayVal);
                setMonth(monthVal);
                setWeek(weekVal);
                setYear(yearVal);
            } catch (error) {
                setSecond('*');
                setMinute('*');
                setHour('*');
                setDay('*');
                setMonth('*');
                setWeek('?');
                setYear('*');
            }
        }
    };

    const onReset = () => {
        const tabTypes = tabs.map(tab => tab.type);
        
        setSecond(tabTypes.includes('second') ? '*' : undefined);
        setMinute(tabTypes.includes('minute') ? '*' : undefined);
        setHour(tabTypes.includes('hour') ? '*' : undefined);
        setDay(tabTypes.includes('day') ? '*' : undefined);
        setMonth(tabTypes.includes('month') ? '*' : undefined);
        setWeek(tabTypes.includes('week') ? '?' : undefined);
        setYear(tabTypes.includes('year') ? '*' : undefined);
        
        if (onOk) {
            onOk(getCronValue());
        }
    };

    const onGenerate = () => {
        if (onOk) {
            onOk(getCronValue());
        }
    };

    const onChangeDay = (v) => {
        setDay(v);
        if (v !== '?') {
            setWeek('?');
        }
    };

    const onChangeWeek = (v) => {
        setWeek(v);
        if (v !== '?') {
            setDay('?');
        }
    };

    useEffect(onParse, [value]);

    const tabItems = tabs.map(tab => {
        const commonProps = {
            key: tab.key,
            label: getTabTitle(tab.label),
            style: tabPaneStyle
        };

        switch (tab.type) {
            case 'second':
                return { ...commonProps, children: <SecondPane value={second} onChange={setSecond} /> };
            case 'minute':
                return { ...commonProps, children: <MinutePane value={minute} onChange={setMinute} /> };
            case 'hour':
                return { ...commonProps, children: <HourPane value={hour} onChange={setHour} /> };
            case 'day':
                return { ...commonProps, children: <DayPane value={day} onChange={onChangeDay} /> };
            case 'month':
                return { ...commonProps, children: <MonthPane value={month} onChange={setMonth} /> };
            case 'week':
                return { ...commonProps, children: <WeekPane value={week} onChange={onChangeWeek} /> };
            case 'year':
                return { ...commonProps, children: <YearPane value={year} onChange={setYear} /> };
            default:
                return null;
        }
    }).filter(Boolean);

    const footerRendererWrapper = useCallback(() => {
        if (footerRenderer && typeof footerRenderer === 'function') {
            return footerRenderer(onReset, onGenerate);
        }
        return (
            <React.Fragment>
                <Button style={{ marginRight: 10 }} onClick={onReset}>
                    重置
                </Button>
                <Button type="primary" onClick={onGenerate}>
                    生成
                </Button>
            </React.Fragment>
        );
    }, [footerRenderer, onReset, onGenerate]);

    return (
        <div
            style={{
                backgroundColor: '#fff',
                borderRadius: '2px',
                outline: 'none',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
                width: 600,
                ...style,
            }}
        >
            <Tabs
                tabBarGutter={0}
                animated
                destroyOnHidden
                activeKey={currentTab}
                onChange={setCurrentTab}
                items={tabItems}
            />
            <div style={{ borderTop: '1px solid #e8e8e8', padding: 10, textAlign: 'right', ...footerStyle }}>
                {footerRendererWrapper()}
            </div>
        </div>
    );
}

export default NebulaCron;
