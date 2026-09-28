import Context from './Context';
import expandSvg from './svg/expand.svg?raw';
import svgcheckboxCheck from './svg/checkbox-check.svg?raw';
import svgSelect from './svg/select.svg?raw';
import svgSortable from './svg/sortable.svg?raw';
import svgLoading from './svg/loading.svg?raw';
import svgDrag from './svg/drag.svg?raw';
import svgCheckboxUncheck from './svg/checkbox-uncheck.svg?raw';
import svgCheckboxIndeterminate from './svg/checkbox-indeterminate.svg?raw';
import svgCheckboxDisabled from './svg/checkbox-disabled.svg?raw';
import svgIconEdit from './svg/icon-edit.svg?raw';

type ConfigColorNameType =
    | 'LOADING_ICON_COLOR'
    | 'EXPAND_ICON_COLOR'
    | 'SHRINK_ICON_COLOR'
    | 'CHECKBOX_COLOR'
    | 'SORT_ICON_COLOR'
    | 'ICON_EDIT_COLOR'
    | 'ICON_SELECT_COLOR'
    | 'CHECKBOX_DISABLED_COLOR'
    | 'CHECKBOX_UNCHECK_COLOR';
type ConfigTypeName =
    | 'LOADING_ICON_SVG'
    | 'EXPAND_ICON_SVG'
    | 'SHRINK_ICON_SVG'
    | 'CHECKBOX_UNCHECK_SVG'
    | 'CHECKBOX_CHECK_SVG'
    | 'CHECKBOX_DISABLED_SVG'
    | 'ICON_EDIT_SVG'
    | 'ICON_SELECT_SVG'
    | 'CHECKBOX_CHECK_DISABLED_SVG'
    | 'CHECKBOX_INDETERMINATE_SVG'
    | 'SORT_ASC_ICON_SVG'
    | 'SORT_DESC_ICON_SVG'
    | 'SORTABLE_ICON_SVG'
    | 'DRAG_ROW_ICON_SVG';

interface SvgIcon extends IconType {
    configName?: ConfigTypeName;
    configColorName?: ConfigColorNameType;
}
export interface IconType {
    name: string;
    svg: string;
    color: string;
    isBlob?: boolean;
}
// 用替换节约点打包体积
const svgSortAsc = svgSortable.replace(`fill="currentColor" p-id="2016"`, `fill="#bec4c7" p-id="2016"`);
const svgSortDesc = svgSortable.replace(`fill="currentColor" p-id="2015"`, `fill="#bec4c7" p-id="2015"`);
export { expandSvg, svgcheckboxCheck, svgSelect, svgSortable, svgSortAsc, svgSortDesc, svgLoading, svgDrag };

export default class Icons {
    private ctx: Context;
    private list: SvgIcon[] = [
        {
            name: 'loading',
            configName: 'LOADING_ICON_SVG',
            configColorName: 'LOADING_ICON_COLOR',
            svg: svgLoading,
            color: '#4E5969',
        },
        {
            name: 'expand',
            configName: 'EXPAND_ICON_SVG',
            configColorName: 'EXPAND_ICON_COLOR',
            svg: expandSvg,
            color: '#4E5969',
        },
        {
            name: 'shrink',
            configName: 'SHRINK_ICON_SVG',
            configColorName: 'SHRINK_ICON_COLOR',
            svg: svgSelect,
            color: '#4E5969',
        },
        {
            name: 'checkbox-uncheck',
            configName: 'CHECKBOX_UNCHECK_SVG',
            configColorName: 'CHECKBOX_UNCHECK_COLOR',
            svg: svgCheckboxUncheck,
            color: '',
        },
        {
            name: 'checkbox-check',
            configName: 'CHECKBOX_CHECK_SVG',
            configColorName: 'CHECKBOX_COLOR',
            svg: svgcheckboxCheck,
            color: 'rgb(82,146,247)',
        },
        {
            name: 'checkbox-indeterminate',
            configName: 'CHECKBOX_INDETERMINATE_SVG',
            configColorName: 'CHECKBOX_COLOR',
            svg: svgCheckboxIndeterminate,
            color: 'rgb(82,146,247)',
        },
        {
            name: 'checkbox-check-disabled',
            configName: 'CHECKBOX_CHECK_DISABLED_SVG',
            svg: svgcheckboxCheck,
            color: '#DDE0EA',
        },
        {
            name: 'checkbox-disabled',
            configName: 'CHECKBOX_DISABLED_SVG',
            configColorName: 'CHECKBOX_DISABLED_COLOR',
            svg: svgCheckboxDisabled,
            color: '#F1F2F4',
        },
        {
            name: 'icon-edit',
            configName: 'ICON_EDIT_SVG',
            configColorName: 'ICON_EDIT_COLOR',
            svg: svgIconEdit,
            color: '#4E5969',
        },
        {
            name: 'icon-setting',
            // Element Plus Setting 图标；默认色对齐 --el-text-color-secondary
            svg: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M600.704 64a32 32 0 0 1 30.464 22.208l35.2 109.376c14.784 7.232 28.928 15.36 42.432 24.512l112.384-24.192a32 32 0 0 1 34.432 15.36L944.32 364.8a32 32 0 0 1-4.032 37.504l-77.12 85.12a357.12 357.12 0 0 1 0 49.024l77.12 85.248a32 32 0 0 1 4.032 37.504l-88.704 153.6a32 32 0 0 1-34.432 15.296L708.8 803.904c-13.44 9.088-27.648 17.28-42.368 24.512l-35.264 109.376A32 32 0 0 1 600.704 960H423.296a32 32 0 0 1-30.464-22.208L357.696 828.48a351.616 351.616 0 0 1-42.56-24.64l-112.32 24.256a32 32 0 0 1-34.432-15.36L79.68 659.2a32 32 0 0 1 4.032-37.504l77.12-85.248a357.12 357.12 0 0 1 0-48.896l-77.12-85.248A32 32 0 0 1 79.68 364.8l88.704-153.6a32 32 0 0 1 34.432-15.296l112.32 24.256c13.568-9.152 27.776-17.408 42.56-24.64l35.2-109.312A32 32 0 0 1 423.232 64H600.64zm-23.424 64H446.72l-36.352 113.088-24.512 11.968a294.113 294.113 0 0 0-34.816 20.096l-22.656 15.36-116.224-25.088-65.28 113.152 79.68 88.192-1.92 27.136a293.12 293.12 0 0 0 0 40.192l1.92 27.136-79.808 88.192 65.344 113.152 116.224-25.024 22.656 15.296a294.113 294.113 0 0 0 34.816 20.096l24.512 11.968L446.72 896h130.688l36.48-113.152 24.448-11.904a288.282 288.282 0 0 0 34.752-20.096l22.592-15.296 116.288 25.024 65.28-113.152-79.744-88.192 1.92-27.136a293.12 293.12 0 0 0 0-40.256l-1.92-27.136 79.808-88.128-65.344-113.152-116.288 24.96-22.592-15.232a287.616 287.616 0 0 0-34.752-20.096l-24.448-11.904L577.344 128zM512 320a192 192 0 1 1 0 384 192 192 0 0 1 0-384zm0 64a128 128 0 1 0 0 256 128 128 0 0 0 0-256z"></path></svg>',
            color: '#909399',
        },
        {
            name: 'icon-setting-hover',
            svg: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M600.704 64a32 32 0 0 1 30.464 22.208l35.2 109.376c14.784 7.232 28.928 15.36 42.432 24.512l112.384-24.192a32 32 0 0 1 34.432 15.36L944.32 364.8a32 32 0 0 1-4.032 37.504l-77.12 85.12a357.12 357.12 0 0 1 0 49.024l77.12 85.248a32 32 0 0 1 4.032 37.504l-88.704 153.6a32 32 0 0 1-34.432 15.296L708.8 803.904c-13.44 9.088-27.648 17.28-42.368 24.512l-35.264 109.376A32 32 0 0 1 600.704 960H423.296a32 32 0 0 1-30.464-22.208L357.696 828.48a351.616 351.616 0 0 1-42.56-24.64l-112.32 24.256a32 32 0 0 1-34.432-15.36L79.68 659.2a32 32 0 0 1 4.032-37.504l77.12-85.248a357.12 357.12 0 0 1 0-48.896l-77.12-85.248A32 32 0 0 1 79.68 364.8l88.704-153.6a32 32 0 0 1 34.432-15.296l112.32 24.256c13.568-9.152 27.776-17.408 42.56-24.64l35.2-109.312A32 32 0 0 1 423.232 64H600.64zm-23.424 64H446.72l-36.352 113.088-24.512 11.968a294.113 294.113 0 0 0-34.816 20.096l-22.656 15.36-116.224-25.088-65.28 113.152 79.68 88.192-1.92 27.136a293.12 293.12 0 0 0 0 40.192l1.92 27.136-79.808 88.192 65.344 113.152 116.224-25.024 22.656 15.296a294.113 294.113 0 0 0 34.816 20.096l24.512 11.968L446.72 896h130.688l36.48-113.152 24.448-11.904a288.282 288.282 0 0 0 34.752-20.096l22.592-15.296 116.288 25.024 65.28-113.152-79.744-88.192 1.92-27.136a293.12 293.12 0 0 0 0-40.256l-1.92-27.136 79.808-88.128-65.344-113.152-116.288 24.96-22.592-15.232a287.616 287.616 0 0 0-34.752-20.096l-24.448-11.904L577.344 128zM512 320a192 192 0 1 1 0 384 192 192 0 0 1 0-384zm0 64a128 128 0 1 0 0 256 128 128 0 0 0 0-256z"></path></svg>',
            color: '#606266',
        },
        {
            name: 'icon-select',
            configName: 'ICON_SELECT_SVG',
            configColorName: 'ICON_SELECT_COLOR',
            svg: svgSelect,
            color: '#4E5969',
        },
        {
            name: 'sort-asc',
            configName: 'SORT_ASC_ICON_SVG',
            configColorName: 'SORT_ICON_COLOR',
            svg: svgSortAsc,
            color: 'rgb(82,146,247)',
        },
        {
            name: 'sort-desc',
            configName: 'SORT_DESC_ICON_SVG',
            configColorName: 'SORT_ICON_COLOR',
            svg: svgSortDesc,
            color: 'rgb(82,146,247)',
        },
        {
            name: 'sort-default',
            configName: 'SORTABLE_ICON_SVG',
            svg: svgSortable,
            color: '#bec4c7',
        },
        {
            name: 'drag',
            configName: 'DRAG_ROW_ICON_SVG',
            svg: svgDrag,
            color: '#4E5969',
        },
    ];
    icons = new Map<string, HTMLImageElement>();
    constructor(ctx: Context) {
        this.ctx = ctx;
        this.init();
    }
    async init() {
        const promises = [];
        for (let i = 0; i < this.list.length; i++) {
            const item = this.list[i];
            let color = item.color;
            let svg = item.svg;
            if (item.configColorName) {
                // 从配置中获取颜色
                const configColor = this.ctx.config[item.configColorName];
                if (configColor) {
                    color = configColor;
                }
            }
            // 替换svg
            if (item.configName) {
                const configSvg = this.ctx.config[item.configName];
                if (configSvg) {
                    svg = configSvg;
                }
            }

            // 将异步操作推入 promises 数组
            const promise = this.createImageFromSVG(svg, color).then((icon) => {
                this.icons.set(item.name, icon);
            });
            promises.push(promise);
        }
        // 额外的图标
        for (let i = 0; i < this.ctx.config.ICONS.length; i++) {
            const item = this.ctx.config.ICONS[i];
            let color = item.color;
            // 将异步操作推入 promises 数组
            const promise = this.createImageFromSVG(item.svg, color, item.isBlob).then((icon) => {
                this.icons.set(item.name, icon);
            });
            promises.push(promise);
        }
        // 并行执行所有异步操作
        await Promise.all(promises);
        // 加载完成后触发绘制
        this.ctx.emit('draw');
    }
    private async createImageFromSVG(svgContent: string, fill?: string, isBlob = false) {
        const parser = new DOMParser();
        const svgDoc = parser.parseFromString(svgContent, 'image/svg+xml');
        const svg = svgDoc.documentElement;
        if (fill) {
            // 控制填充颜色
            svg.querySelectorAll('*').forEach((element) => {
                const attrValue = element.getAttribute('fill');
                if (attrValue === 'currentColor' || attrValue === null) {
                    element.setAttribute('fill', fill);
                }
            });
        }
        const img = new Image();
        let url = '';
        if (isBlob) {
            const svgBlob = new Blob([new XMLSerializer().serializeToString(svg)], {
                type: 'image/svg+xml',
            });
            url = URL.createObjectURL(svgBlob);
        } else {
            url = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(new XMLSerializer().serializeToString(svg));
        }
        img.src = url;
        return new Promise<HTMLImageElement>((resolve, reject) => {
            img.onerror = () => reject(new Error('Failed to load image:' + svgContent));
            img.onload = () => {
                resolve(img);
            };
        });
    }
    get(name: string) {
        return this.icons.get(name);
    }
    getSvg(name: string) {
        return this.list.find((item) => item.name === name);
    }
}
